<template>
   <div>

       <div class="card">
         <div class="container">
            <h4>
                <b>Title : {{ result.title }}</b>
            </h4> 
            <p>Comment : {{ result.details }}</p> 
            <p>Due date : {{ result.dueDate }}</p> 
            <!-- buttons status -->
                <div v-if="result.status === 'doing' || result.status === 'done'" @click="changeStatus('toDo')" class="button-3">Move to To Do</div>
                <div v-if="result.status === 'done' || result.status === 'toDo'" @click="changeStatus('doing')" class="button">Move to Doing</div>
                <div v-if="result.status === 'doing' || result.status === 'toDo'" @click="changeStatus('done')" class="button-2">Move to Done</div>
            <!-- button delete -->
                <div @click="$emit('deleteItem', index)" class="button-delete">Delete</div>
            <!-- button edit -->
                <div @click="displayModal" class="button-edit">Edit</div>
            </div>
        </div>

   </div>
</template>


<script>

export default {
    props: {
        result: { type: Object, required: true },
        index: { type: Number, required: true }
    },

    methods: {
        changeStatus(value) {
        this.result.status = value;
        },

        displayModal() {
        this.$emit('displayModal', this.index)
        }
    }
    
}

</script>

<style scoped>

.card {
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
    width: 90%;
    border-radius: 5px;
    background-color: aliceblue;
    color: black;
    margin: 10px auto;
    line-height: 1.2
}

.card:hover {
    box-shadow: 0 12px 16px 0 rgba(0,0,0,0.2);
}

.container {
    padding: 2px 16px;
}

.button {
    background:lightcoral;
    color: white;
    border-radius: 4px;
    display: inline-block;
    padding: 5px;
    margin-top: 15px;
    cursor: pointer;
}

.button-2 {
    background:lightgreen;  
    color: white;
    border-radius: 4px;
    display: inline-block;
    padding: 5px;
    margin-top: 15px;
    cursor: pointer;
}

.button-3 {
    background:lightskyblue;
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

.button-edit {
    background: lightsalmon;
    color: white;
    border-radius: 4px;
    display: inline-block;
    padding: 5px;
    margin-top: 15px;
    cursor: pointer;
}


</style>


