<template>
<div>
    <h1>To Do V2</h1>
  
    <formulaire @sendResults="addItems($event)"></formulaire>

    <filter-input @sortedAll="sortedAll($event)"  @sortByText="sortByText($event)" @sortByDate="sortByDate($event)"></filter-input>

    <to-do @deleteItem="deleteItem($event)" @displayModal="show($event)" :filteredArray="filteredArray"></to-do>

    <edit-modal @displayOff="displayOff($event)" :result="results[this.modal]" v-if="modal != null"></edit-modal>
</div>
</template>

<script>
import EditModal from '../components/modal/Edit'
import ToDo from '../components/ToDo';
import Formulaire from '../components/Form';
import FilterInput from '../components/Filter';

// import { mapGetters, mapActions } from 'vuex';


export default {
    components: {
        ToDo,
        Formulaire,
        EditModal,
        FilterInput
    },

    data() {
        return {
           results: [],
           modal: null,
           sortDate: '',
           sortText: '',
        }
    },
  
  computed: {
    filteredArray() {
        const filtered = this.results
        .map((item) => {
             if(this.sortDate === ''){
                return item
            }
            else if(this.sortDate === item.dueDate){
                return item
            }
        }).map((item)=> {
            if (!item){
                return item
            }
            else if(this.sortText === ''){
                return item
            }
            else if (this.sortText === item.title){
                return item
            }
        }).filter(item => item)
        return filtered
        }
},
    methods: {
        addItems(items) {
            this.results.push(items)
        },

        deleteItem(event){
            this.results.splice(event, 1)
        },

        show(event) {
            this.modal = event;
        },

        displayOff(event) {
            this.modal = event
        },

        sortByDate(event) {
            this.sortDate = event        
        },

        sortByText(event) {
            this.sortText = event
        },

        sortedAll(event) {
            this.sortText = event.searchText
            this.sortDate = event.searchDate
        }
    },  
};

</script>

<style scoped>

h1 {
    margin-top: 2px;
    line-height: 0.5
}

</style>
