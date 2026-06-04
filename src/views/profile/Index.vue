<template>
    <div class="pb-20 pt-20">
        <div class="container mx-auto grid grid-cols-1 p-3 sm:w-full md:w-5/12">

            <form method="POST" enctype="multipart/form-data">

                <div class="bg-white p-5 rounded-md shadow-md mb-5">
                    <div class="flex flex-col justify-center items-center relative">
                        <div>
                            <img :src="profile.avatar" class="rounded-full w-28 h-28 object-cover">
                        </div>
                        <div class="mt-4">
                            <input type="file" class="rounded bg-gray-300 p-2 w-full shadow-sm">
                        </div>
                    </div>
                </div>

                <div class="bg-white p-3 rounded-md shadow-md">
                    <div class="grid grid-cols-1 gap-4">

                        <div class="mb-2">
                            <label class="mt-2">Nama Lengkap</label>
                            <input type="text"
                                class="mt-2 appearance-none w-full bg-gray-200 rounded h-7 shadow-sm placeholder-gray-700 focus:outline-none focus:placeholder-gray-600 focus:bg-gray-300 focus-within:text-gray-600 p-5"
                                placeholder="Nama Lengkap" v-model="profile.name">
                        </div>

                        <div class="mb-2">
                            <label class="mt-2">Alamat Email</label>
                            <input type="email"
                                class="mt-2 appearance-none w-full bg-gray-200 opacity-70 rounded h-7 shadow-sm placeholder-gray-600 focus:outline-none focus:placeholder-gray-600 focus:bg-gray-300 focus-within:text-gray-600 p-5"
                                v-model="profile.email" placeholder="Alamat Email" disabled>
                        </div>

                        <div>
                            <button type="submit"
                                class="mt-3 bg-gray-700 text-white p-2 w-full rounded-md shadow-md focus:outline-none">
                                UPDATE PROFILE
                            </button>
                        </div>

                    </div>
                </div>

            </form>

        </div>
    </div>
</template>

<script>

//hook vue
import { computed, onMounted } from 'vue'

//hook vuex
import { useStore } from 'vuex'

export default {

    name: 'ProfileComponent',

    setup() {

        //store vuex
        const store = useStore()

        //onMounted akan menjalankan action getProfile di module profile
        onMounted(() => {
            store.dispatch('profile/getProfile')
        })

        //profile
        const profile = computed(() => {
            return store.state.profile.profile
        })

        return {
            profile,   // <-- state profile
        }

    }

}
</script>

<style></style>
