<template>
<v-app id="listApp">


<p>This app calls a backend to get the list </p>



</v-app>
</template>
<script>
function getList () {
    return fetch ('http://localhost:3000/lists')
.then(res => res.json())
.then (data => {
    list_app = data
})
}

</script>

<style scoped>


h1 {font-size: 2.5em;
text-align:center;}

#listApp{ background: rgb(225,209,244);
background: linear-gradient(0deg, rgba(225,209,244,1) 0%, rgba(213,254,212,1) 30%, rgba(229,255,253,1) 33%, rgba(208,250,244,1) 51%);
}

v-app{background: rgb(225,209,244);
background: linear-gradient(0deg, rgba(225,209,244,1) 0%, rgba(213,254,212,1) 30%, rgba(229,255,253,1) 33%, rgba(208,250,244,1) 51%)}

</style>