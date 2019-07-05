import { initAccessContext } from 'eos-transit'
import scatter from 'eos-transit-scatter-provider'
import lynx from 'eos-transit-lynx-provider'
import tp from 'eos-transit-tokenpocket-provider'
import meetone from 'eos-transit-meetone-provider'

const appName = 'hyphadao'
const contractAccount = 'hyphadaobali'

const network = {
  protocol: 'https',
  host: 'testnet.telos.caleos.io',
  port: 443,
  chainId: 'e17615decaecd202a365f4c029f206eee98511979de8a5756317e2469f2289e3'
}

export default (function () {
  let wallet = null
  let accountInfo = null

  const walletProviders = [
    scatter(), lynx(), tp(), meetone()
  ]

  const connect = async (walletId, subscribeCallback) => {
    const options = {
      appName,
      network,
      walletProviders
    }

    const accessContext = initAccessContext(options)

    wallet = accessContext.initWallet(
      accessContext.getWalletProviders().find(r => r.id === walletId)
    )

    wallet.subscribe(subscribeCallback)

    await wallet.connect()

    accountInfo = await wallet.login()
  }

  const terminate = () => {
    return wallet.terminate()
  }

  const getTableRows = (code, scope, table) => {
    return wallet.eosApi.rpc.get_table_rows({
      json: true,
      code,
      scope,
      table
    })
  }

  const transact = (transaction, config = {
    sign: true,
    broadcast: true,
    blocksBehind: 3,
    expireSeconds: 60
  }) => {
    return wallet.eosApi.transact(transaction, config)
  }

  const requireWallet = (fn) => (...args) => {
    if (!wallet) {
      throw new Error('Wallet not ready')
    }
    if (!accountInfo) {
      throw new Error('User not authorized')
    }
    return fn(...args)
  }

  const getUserAccount = () => accountInfo.account_name

  const getContractAccount = () => contractAccount

  return Object.freeze({
    connect,
    terminate: requireWallet(terminate),
    getTableRows: requireWallet(getTableRows),
    transact: requireWallet(transact),
    getUserAccount: requireWallet(getUserAccount),
    getContractAccount
  })
})()
