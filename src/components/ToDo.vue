<template>
<div class="layout">
    <div class="col-to-do">
        <h3>To Do</h3>
    <transition name="slide-fade"  v-for="(result, index) in filteredArray" :key="index">
            <ticket 
            :result="result" 
            :index="index" 
            v-if="result.status === 'toDo'"
            @deleteItem="deleteItem(index)"
            @displayModal="show($event)">
            </ticket>
    </transition>

  </div>

    <div class="col-doing">
        <h3>Doing</h3>
    <transition name="slide-fade"  v-for="(result, index) in filteredArray" :key="index">
            <ticket 
            :result="result" 
            :index="index"
            v-if="result.status === 'doing'"
            @deleteItem="deleteItem(index)"
            @displayModal="show($event)">
            </ticket>
    </transition>

    </div>

    <div class="col-done">
        <h3>Done</h3>
    <transition name="slide-fade"  v-for="(result, index) in filteredArray" :key="index">
            <ticket 
            :result="result" 
            :index="index" 
            v-if="result.status === 'done'"
            @deleteItem="deleteItem(index)"
            @displayModal="show($event)">
            </ticket>
    </transition>
    </div>

</div>
</template>


<script>
import Ticket from '../components/Ticket'


export default {
components: {
    Ticket,
},

props: {
    filteredArray: { type: Array, required: true },
    }, 


methods: { 
    deleteItem(index) {
        this.$emit('deleteItem', index)
     },


    show(event) {
        this.$emit("displayModal", event)  
    }
 }
    
}
</script>

<style scoped>

.layout {
    display: flex;
}

.col-to-do {
    background-color:lightskyblue;
    height: 50vh;
    width: 30vw;
    margin-left: 30px;
    color:white;
    overflow: scroll;
}

.col-doing {
    background-color:lightcoral;
    height: 50vh;
    width: 30vw;
    margin-left: 30px;
    color:white;
    overflow: scroll;
}

.col-done {
    background-color:lightgreen;
    height: 50vh;
    width: 30vw;
    margin-left: 30px;
    color:white;
    overflow: scroll;
}

.slide-fade-enter-active {
    transition: all .4s ease;
}
.slide-fade-leave-active {
    transition: all .4s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to{
    transform: translateX(10px);
    opacity: 0;
}

</style>
