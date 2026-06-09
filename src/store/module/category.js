//import global API
import Api from '../../api/Api'

const category = {

    //set namespace true
    namespaced: true,

    //state
    state: {

        //index categories
        categories: [],

        //detail category
        category: {},

        //campaign category
        campaignCategory: []

    },

    //mutations
    mutations: {

        //set state categories dengan data dari response 
        SET_CATEGORIES(state, data) {
            state.categories = data
        },

        //set state category dengan data dari response 
        DETAIL_CATEGORY(state, data) {
            state.category = data
        },

        //set state campaignCategory dengan data dari response 
        CAMPAIGN_CATEGORY(state, data) {
            state.campaignCategory = data
        },

    },

    //actions
    actions: {

        //action getCategoryHome
        getCategoryHome({ commit }) {

            //get data category Home ke server
            Api.get('/categoryHome')
                .then(response => {

                    //commit ke mutation SET_CATEGORIES dengan response data
                    commit('SET_CATEGORIES', response.data.data)

                }).catch(error => {

                    //show error log dari response
                    console.log(error)

                })
        },

        //action getCategory
        getCategory({ commit }) {

            //get data category ke server
            Api.get('/category')
                .then(response => {

                    //commit ke mutation SET_CATEGORIES dengan response data
                    commit('SET_CATEGORIES', response.data.data.data)

                }).catch(error => {

                    //show error log dari response
                    console.log(error)

                })
        },

        //action getCategory
        getDetailCategory({ commit }, slug) {

            //get data detail category ke server
            Api.get(`/category/${slug}`)
                .then(response => {

                    //commit ke mutation DETAIL_CATEGORY dengan response data
                    commit('DETAIL_CATEGORY', response.data.data)

                    //commit ke mutation CAMPAIGN_CATEGORY dengan response data
                    commit('CAMPAIGN_CATEGORY', response.data.data.campaigns)

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

export default category
