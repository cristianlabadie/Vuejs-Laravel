<template>   
    <div class="card mt-3">
        <div class="card-header">Publicacion hecha en {{pensamiento.created_at}}</div>
        <div class="card-body">
            <input v-if="isEditing" type="text" class="form-control" v-model="pensamiento.description">
            <p v-else>
                {{pensamiento.description}}
            </p>
            
        </div>
        <div class="card-footer">
            <button v-if="isEditing" class="btn btn-primary" @click="onClickUpdate()">Guardar cambios</button>
            <button v-else class="btn btn-success" @click="onClickEdit()">Editar</button>
            <button class="btn btn-danger" @click="onClickDelete()">Eliminar</button>
        </div>
    </div>       
</template>

<script>
    export default {
        props: ['pensamiento'],
        data(){
            return {
                isEditing : false
            }
        },
        mounted() {
            console.log('Component Pensamiento mounted.')
        },
        methods:{
            onClickDelete(){
                this.$emit('delete');
            },
            onClickEdit(){
                this.isEditing = true;
                
            },
            onClickUpdate(){
                this.isEditing = false;
                this.$emit('update', pensamiento);
            }

        }
    }
</script>
