//import global API
import Api from '../../api/Api'

const profile = {

    //set namespace true
    namespaced: true,

    //state
    state: {

        //profile state
        profile: {},

    },

    //mutations
    mutations: {

        //set state profile dengan data dari response 
        SET_PROFILE(state, data) {
            state.profile = data
        },

    },

    //actions
    actions: {

        //action getProfile
        getProfile({ commit }) {

            //get data token dan user
            const token = localStorage.getItem('token')

            //set axios header dengan type Authorization + Bearer token
            Api.defaults.headers.common['Authorization'] = `Bearer ${token}`

            //get data profile ke server
            Api.get('/profile')
                .then(response => {

                    //commit ke mutation SET_PROFILE dengan response data
                    commit('SET_PROFILE', response.data.data)

                }).catch(error => {

                    //show error log dari response
                    console.log(error)

                })
        },

        //action updateProfile
        updateProfile({ commit }, formData) {

            return new Promise((resolve, reject) => {

                //get data token dan user
                const token = localStorage.getItem('token')

                //set axios header dengan type Authorization + Bearer token
                Api.defaults.headers.common['Authorization'] = `Bearer ${token}`

                //get data profile ke server
                Api.post('/profile', formData)
                    .then(response => {

                        //commit ke mutation SET_PROFILE dengan response data
                        commit('SET_PROFILE', response.data.data)

                        resolve(response)

                    }).catch(error => {

                        //reject ke component dengan hasil response
                        reject(error.response.data)

                    })
            })

        },

    },

    //getters
    getters: {

    }

}

export default profile
