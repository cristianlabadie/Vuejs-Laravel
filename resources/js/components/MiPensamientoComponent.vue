<template>
    <div class="row justify-content-center">
        <div class="col-md-8">
            <form-component @new="addPensamiento"></form-component><br>    
            <pensamiento-component 
            v-for="(pensamiento, index) in pensamientos" 
            :key="pensamiento.id"
            :pensamiento="pensamiento"
            @update="updatePensamiento(index, pensamiento)"
            @delete="deletePensamiento(index)">
            </pensamiento-component>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                pensamientos: [{
                    'id' : 1,
                    'description' : 'Abcde',
                    'created_at' : '18/08/2019'
                }]
            }        
        },
        mounted() {
            console.log('Component Mis Pensamiento mounted.')
        },
        methods:{
            addPensamiento(pensamiento){
                this.pensamientos.push(pensamiento);
            },
            deletePensamiento(index){
                this.pensamientos.splice(index, 1);
            },
            updatePensamiento(index, pensamiento){
                this.pensamientos[index] = pensamiento;
            }


        }
    }
</script>
