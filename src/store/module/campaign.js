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

        //detail campaign
        campaign: {},

        //detail user
        user: {},

        //total donation
        sumDonation: [],

        //data donations
        donations: []

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

        //set state campaign dengan data dari response
        DETAIL_CAMPAIGN(state, data) {
            state.campaign = data
        },

        //set state donatur dengan data dari response
        DETAIL_USER(state, data) {
            state.user = data
        },

        //set state sumDonation dengan data dari response
        DETAIL_SUMDONATION(state, data) {
            state.sumDonation = data
        },

        //set state donations dengan data dari response
        SET_DONATIONS(state, data) {
            state.donations = data
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

        //action getDetailCampaign
        getDetailCampaign({ commit }, slug) {

            //get data detail campaign ke server
            Api.get(`/campaign/${slug}`)
                .then(response => {

                    //commit ke mutation DETAIL_CAMPAIGN dengan response data
                    commit('DETAIL_CAMPAIGN', response.data.data)

                    //commit ke mutation DETAIL_USER dengan response data
                    commit('DETAIL_USER', response.data.data.user)

                    //commit ke mutation DETAIL_SUMDONATION dengan response data
                    commit('DETAIL_SUMDONATION', response.data.data.sum_donation)

                    //commit ke mutation SET_DONATIONS dengan response data
                    commit('SET_DONATIONS', response.data.donations)

                }).catch(error => {

                    //show error log dari response
                    console.log(error)

                })
        },

        //action searchCampaign
        searchCampaign({ commit }, querySearch = '') {

            //get data token dan user
            const token = localStorage.getItem('token')

            //set axios header dengan type Authorization + Bearer token
            Api.defaults.headers.common['Authorization'] = `Bearer ${token}`

            //get data campaign ke server
            Api.get(`/campaign?q=${querySearch}`)
                .then(response => {

                    //commit ke mutation SET_CAMPAIGNS dengan response data
                    commit('SET_CAMPAIGNS', response.data.data.data)

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
