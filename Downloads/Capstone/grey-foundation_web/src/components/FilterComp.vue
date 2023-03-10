<template>
    <div class="filter">
           <select>
               <option value="all">Categories</option>
               <option value="5000 - more">Men</option>
               <option value="5000 - more">Women</option> 
                <option value="0-500">Clothing</option>
                <option value="500-1500">Bags</option>
                <option value="1500-5000">Accessories</option>
            </select>
            <select>
                <option value="all">Price</option>
                <option value="0-500">0 - 500</option>
                <option value="500-1500">500 - 1500</option>
                <option value="1500-5000">1500 - 5000</option>
                <option value="5000 - more">5000+</option> 
            </select>
            <select>
                <option value="all">Designers</option>
                <option value="Fendi">Fendi</option>
                <option value="Cucci">Gucci</option>
                <option value="Versace">Versace</option>
            </select>
            <select>
                <option value="all">Clothing Sizes</option>
                <option value="all"> UK 6 7/8</option>
                <option value="Fendi">UK 7 1/8</option>
                <option value="Cucci">UK 7 3/4</option>
                <option value="Versace">UK 7 3/8</option>
                <option value="Versace">UK 7 7/8</option>
            </select>

    </div>
</template>
<script>
export default {
    name : 'FilterComp'
}
</script>
<style>
.filter {
    display: flex;
    flex-direction: column;
    margin-top: 15px;
    width: 300px;
}

select {
    height: 35px;
    width: 350px;
}

option {
    position: absolute;
}
</style>