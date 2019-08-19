<template> 
    <div class="card">
        <div class="card-header">En que estás pensando ahora?</div>
        <div class="card-body">
            
            <form action="" v-on:submit.prevent="newPensamiento()">
                <div class="form-group">
                    <label for="pensamiento">Ahora estoy pensando en:</label>
                    <input type="text" name="description" id="description" class="form-control" v-model="description">
                </div>
                <button type="submit" class="btn btn-primary">Enviar pensamiento</button>
            </form>  
        </div>            
    </div>
</template>

<script>
    export default {
        data(){
            return {                
                description : ''
            }
        },
        mounted() {
            console.log('Component Form mounted.')
        },
        methods: {
            newPensamiento(){
                let pensamiento = {
                    id: this.id,
                    description: this.description,
                    created_at: '19/08/2019'
                };
                this.$emit('new', pensamiento);
                this.description = '';
                
            }
        }
    }
</script>
