<template>
     <div class="form">
        <h2 v-if="!result">{{bigTitle}}</h2>
        <h2 v-if="result"> {{editTitle}} </h2>
    <form>
    
    <div class="col-title">
    <p>Title :</p>
        <input v-model="item.title" type="text" placeholder="Title">
    </div>

    <div class="col-description">
    <p>Description :</p>
        <textarea v-model="item.details" placeholder="Some Details"></textarea>
   </div>

    <div class="col-date">
    <p>Due Date :</p>
        <input v-model="item.dueDate" type="date"  placeholder="Due Date">
     <br>
            <div v-if="!result" class="button" @click="add">Add</div>
            <div v-if="result" class="button-edit" @click="$emit('close')">Edit</div>
            <div v-if="result" class="button-delete" @click="$emit('close')">Cancel</div>
    </div>

    </form>
     <br>
    </div>
</template>

<script>
export default {
    props: {
        result:{type: Object, required: false}
    },
    
    data(){
        return {
            bigTitle: "Add a to do",
            editTitle : "Edit",
            item : {
                title: '',
                details: '',
                dueDate: '',
                status: '',
            }
        };
    },

    created(){
        if (this.result) {
         this.item = this.result
        }   
    },

    methods: {
        add(){
            const newItem = {
            title: this.item.title,
            details: this.item.details,
            dueDate: this.item.dueDate,
            status: 'toDo',
            }
            this.$emit('sendResults', newItem)
            this.item.title = '';
            this.item.dueDate = '';
            this.item.details = '';
        },

    }
    
}
</script>

<style scoped>
.form {
    border: 1px solid black;
    width: 20vw;
    margin: 0 auto;
    line-height: 0.8;
}

.button {
    background: rgb(28, 184, 65);  
    color: white; 
    border-radius: 4px;
    display: inline-block;
    padding: 5px;
    margin-top: 15px;
    cursor: pointer;
}

.button-edit {
    background: lightsalmon;  
    color: white; 
    border-radius: 4px;
    display: inline-block;
    padding: 5px;
    margin-top: 15px;
    cursor: pointer;
}

.button-delete {
    background:red;  
    color: white; 
    border-radius: 4px;
    display: inline-block;
    padding: 5px;
    margin-top: 15px;
    cursor: pointer;
}
</style>
