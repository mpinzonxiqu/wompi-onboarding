import { createStore } from 'vuex'

export default createStore({
  state: {
    product: null,
    stock: 0,
    clientInfo: {},
    cardInfo: {},
    transaction: null,
    paymentStatus: null
  },
  mutations: {
    setProduct(state, product) {
      state.product = product
    },
    setStock(state, stock) {
      state.stock = stock
    },
    setClientInfo(state, info) {
      state.clientInfo = info
    },
    setCardInfo(state, info) {
      state.cardInfo = info
    },
    setTransaction(state, transaction) {
      state.transaction = transaction
    },
    setPaymentStatus(state, status) {
      state.paymentStatus = status
    }
  },
  actions: {},
  getters: {}
})
