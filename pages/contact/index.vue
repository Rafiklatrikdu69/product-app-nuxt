<script setup lang="ts">
definePageMeta({
  layout: 'nav',
  middleware: ['auth']
})

const firstName = ref('')
const lastName = ref('')
const email = ref('')
const textArea = ref('')

const toast = useToast()

const  submitMessage = () =>{
    const fieldEmpty = !lastName.value.trim() || !email.value.trim() || !textArea.value.trim();

if (fieldEmpty) {
    toast.add({ 
        title: 'Message Vide !', 
        icon: "i-heroicons-exclamation-circle",
        color: 'red' 
    });
} else {
    toast.add({ 
        title: 'Message envoyé : ' + textArea.value, 
        icon: "i-heroicons-check-badge", 
        color: 'green' 
    });
}

}
</script>

<template>
    <main class="container">
        <div class="container">
            <p class="text">
                Contact
            </p>
            <form action="#">
                <div class="form-row">
                    <div class="input-data">
                        <input type="text" required v-model="firstName">
                        <div class="underline"></div>
                        <label for="">First Name</label>
                    </div>
                    <div class="input-data">
                        <input type="text" required v-model="lastName">
                        <div class="underline"></div>
                        <label for="">Last Name</label>
                    </div>
                </div>
                <div class="form-row">
                    <div class="input-data">
                        <input type="text" required v-model="email">
                        <div class="underline"></div>
                        <label for="">Email Address</label>
                    </div>
                </div>
                <div class="form-row">
                    <div class="input-data textarea">
                        <textarea rows="8" cols="80" required v-model="textArea"></textarea>
                        <br />
                        <div class="underline"></div>
                        <label for="">Write your message</label>
                        <br />
                        <div class="form-row submit-btn">
                            <div class="input-data">
                                <UButton class="button" @click="submitMessage">Submit</UButton>
                                <div class="inner"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
        
        <UNotifications/>
    </main>
    
</template>
<style scoped>
@import url('https://fonts.googleapis.com/css?family=Poppins:400,500,600,700&display=swap');
*{
    margin: 0;
    padding: 0;
    outline: none;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
}

.container{
    width: 100%;
    padding: 30px;
}
.container .text{
    text-align: center;
    font-size: 41px;
    font-weight: 600;
    font-family: 'Poppins', sans-serif;
    color: gray;
}
.container form{
    padding: 30px 0 0 0;
}
.container form .form-row{
    display: flex;
    margin: 32px 0;
}
form .form-row .input-data{
    width: 100%;
    height: 40px;
    margin: 0 20px;
    position: relative;
}
form .form-row .textarea{
    height: 70px;
}
.input-data input,
.textarea textarea{
    display: block;
    width: 100%;
    height: 100%;
    border: none;
    font-size: 17px;
    border-bottom: 2px solid gray;
}
.input-data input:focus ~ label, .textarea textarea:focus ~ label,
.input-data input:valid ~ label, .textarea textarea:valid ~ label{
    transform: translateY(-20px);
    font-size: 14px;
    color: #5f5f5f;
}
.textarea textarea{
    resize: none;
    padding-top: 10px;
}
.input-data label{
    position: absolute;
    pointer-events: none;
    bottom: 10px;
    font-size: 16px;
    transition: all 0.3s ease;
}
.textarea label{
    width: 100%;
    bottom: 40px;
}
.input-data .underline{
    position: absolute;
    bottom: 0;
    height: 2px;
    width: 100%;
}
.input-data .underline:before{
    position: absolute;
    content: "";
    height: 2px;
    width: 100%;
    background: #7e7e7e;
    transform: scaleX(0);
    transform-origin: center;
    transition: transform 0.3s ease;
}
.input-data input:focus ~ .underline:before,
.input-data input:valid ~ .underline:before,
.textarea textarea:focus ~ .underline:before,
.textarea textarea:valid ~ .underline:before{
    transform: scale(1);
}
.submit-btn .input-data{
    overflow: hidden;
    height: 45px!important;
    width: 25%!important;
}
.submit-btn .input-data .inner{
    height: 100%;
    width: 300%;
    position: absolute;
    left: -100%;
    transition: all 0.4s;
}
.submit-btn .input-data:hover .inner{
    left: 0;
}
.submit-btn .input-data input{
    background: none;
    border: none;
    color: #fff;
    font-size: 17px;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 1px;
    cursor: pointer;
    position: relative;
    z-index: 2;
}
.button{
    padding: 10px;
}
@media (max-width: 700px) {
    .container .text{
        font-size: 30px;
    }
    .container form{
        padding: 10px 0 0 0;
    }
    .container form .form-row{
        display: block;
    }
    form .form-row .input-data{
        margin: 35px 0!important;
    }
    .submit-btn .input-data{
        width: 40%!important;
    }
}
</style>

