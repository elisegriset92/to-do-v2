<template>

<transition name="modal">
  <div class="modal-mask">
    <div class="modal-wrapper">
      <div class="modal-container">

            <formulaire  @close="displayOff" :result="result"></formulaire>

      </div>
    </div>
  </div>
</transition>

</template>

<script>

import Formulaire from '../../components/Form'

export default {
    props: {
        result: {type: Object, required: false}
    },
    
    components: {
        Formulaire
    },

    methods: {
        displayOff() {
            const off = null;
            this.$emit('displayOff', off)
        },
    }
}
</script>

<style scoped>


.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .5);
  display: table;
  transition: opacity .3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 20vw;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
  transition: all .3s ease;
}

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  transform: scale(1.1);
}

</style>
