<template>
<div>
    <div class="inputFilter">
        <label>Sort by text</label>
        <input @input="sortByText()" v-model="searchFields.searchText" type="text">
    </div>
     <div class="inputFilter">
        <label>Sort by due date</label>
        <input @change="sortByDate()" v-model="searchFields.searchDate" type="date">
    </div>
    <div class="inputFilter">
        <input @click="noFilter()" type="button" value="ALL">
    </div>
</div>

</template>


<script>
export default {
    data() {
        return {
            searchFields: {
                searchText : '',
                searchDate : '',
            }
        }
    },

    methods: {
        sortByDate(){
            this.$emit('sortByDate', this.searchFields.searchDate)
            
        },

        sortByText(){
            this.$emit('sortByText', this.searchFields.searchText)
        },

        noFilter(){
            this.searchFields.searchText = '';
            this.searchFields.searchDate = '';
            this.$emit('sortedAll', this.searchFields)
        }
    }

}
</script>


<style scoped>

.inputFilter {
    display: inline-flex;
    margin: 10px;
    padding: 10px

}


</style>
