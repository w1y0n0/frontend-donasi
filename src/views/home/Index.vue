<template>
    <div class="pb-20 pt-20">
        <div class="container mx-auto grid grid-cols-1 p-3 sm:w-full md:w-5/12">

            <!-- slider -->
            <div class="grid grid-cols-1 bg-white rounded shadow-md p-1 text-sm">
                <Slider />
            </div>

            <!-- categoryHome -->
            <CategoryHome />

            <!-- campaign -->

        </div>

    </div>
</template>

<script>

//component slider
import Slider from '../../components/Slider.vue'

//component categoryHome
import CategoryHome from '../../components/CategoryHome.vue'

export default {

    name: 'HomeComponent',

    components: {
        Slider,         // <-- register component slider
        CategoryHome,   // <-- register component CategoryHome
    },

}
</script>
