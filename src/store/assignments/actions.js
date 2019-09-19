import wallet from 'src/wallet'

export const loadActive = ({ commit }) => {
  wallet.getTableRows(wallet.getContractAccount(), wallet.getContractAccount(), 'assignments')
    .then(result => {
      commit('setActiveAssignments', result)
    })
}

export const loadProposals = ({ commit }) => {
  wallet.getTableRows(wallet.getContractAccount(), wallet.getContractAccount(), 'assprops')
    .then(result => {
      commit('setProposalAssignments', result)
    })
}

export const sendProposal = ({ dispatch }, payload) => {
  const transaction = {
    actions: [{
      account: wallet.getContractAccount(),
      name: 'propassign',
      authorization: [{
        actor: wallet.getUserAccount(),
        permission: 'active'
      }],
      data: {
        proposer: wallet.getUserAccount(),
        assigned_account: wallet.getUserAccount(),
        role_id: payload.role_id,
        info_url: payload.info_url,
        notes: payload.notes,
        start_period: new Date(payload.start_period).getTime() / 1000,
        end_period: new Date(payload.end_period).getTime() / 1000,
        time_share: payload.time_share
      }
    }]
  }

  dispatch('wallet/sendTransaction', {
    name: 'Propose New Assignment',
    transaction
  }, { root: true })
}

export const sendVote = ({ dispatch }, payload) => {
  const trail = wallet.getTrailAccount()
  const user = wallet.getUserAccount()

  const transaction = {
    actions: [{
      account: trail,
      name: 'castvote',
      authorization: [{
        actor: user,
        permission: 'active'
      }],
      data: {
        voter: user,
        ballot_id: payload.ballot_id,
        direction: payload.direction
      }
    }]
  }

  dispatch('wallet/sendTransaction', {
    name: 'Vote for Assignment',
    transaction
  }, { root: true })
}