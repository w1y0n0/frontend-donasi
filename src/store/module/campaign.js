//import global API
import Api from '../../api/Api'

const campaign = {

    //set namespace true
    namespaced: true,

    //state
    state: {

        //index campaigns
        campaigns: [],

        //loadmore
        nextExists: false,
        nextPage: 0,

    },

    //mutations
    mutations: {

        //set state campaigns dengan data dari response 
        SET_CAMPAIGNS(state, campaigns) {
            state.campaigns = campaigns
        },

        //set state nextExists
        SET_NEXTEXISTS(state, nextExists) {
            state.nextExists = nextExists
        },

        //set state nextPage
        SET_NEXTPAGE(state, nextPage) {
            state.nextPage = nextPage
        },

        //set state campaigns dengan data dari response loadmore
        SET_LOADMORE(state, data) {
            data.forEach(row => {
                state.campaigns.push(row);
            });
        },

    },

    //actions
    actions: {

        //action getCampaign
        getCampaign({ commit }) {

            //get data campaign ke server
            Api.get('/campaign')
                .then(response => {

                    //commit ke mutation SET_CAMPAIGNS dengan response data
                    commit('SET_CAMPAIGNS', response.data.data.data)

                    if (response.data.data.current_page < response.data.data.last_page) {

                        //commit ke mutation SET_NEXTEXISTS dengan true
                        commit('SET_NEXTEXISTS', true)

                        //commit ke mutation SET_NEXTPAGE dengan current page + 1
                        commit('SET_NEXTPAGE', response.data.data.current_page + 1)

                    } else {

                        //commit ke mutation SET_NEXTEXISTS dengan false
                        commit('SET_NEXTEXISTS', false)
                    }

                }).catch(error => {

                    //show error log dari response
                    console.log(error)

                })
        },

        //action getLoadMore
        getLoadMore({ commit }, nextPage) {

            //get data campaign dengan page ke server
            Api.get(`/campaign?page=${nextPage}`)
                .then(response => {

                    //commit ke mutation SET_LOADMORE dengan response data
                    commit('SET_LOADMORE', response.data.data.data)

                    //console.log(response.data.data.data)

                    if (response.data.data.current_page < response.data.data.last_page) {

                        //commit ke mutation SET_NEXTEXISTS dengan true
                        commit('SET_NEXTEXISTS', true)

                        //commit ke mutation SET_NEXTPAGE dengan current page + 1
                        commit('SET_NEXTPAGE', response.data.data.current_page + 1)

                    } else {

                        //commit ke mutation SET_NEXTEXISTS dengan false
                        commit('SET_NEXTEXISTS', false)
                    }

                }).catch(error => {

                    //show error log dari response
                    console.log(error)

                })
        },

    },

    //getters
    getters: {

    }

}

export default campaign
