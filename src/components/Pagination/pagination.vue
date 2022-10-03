<!-- <template>
    <div>
        <ul>
            <li v-for="page in totalPages" :key="page">
                <button @click="changePage(page)"
                :class="{active: currentPage === page}"
                 class="pagination-button">{{page}}</button>
            </li>
        </ul>
    </div>
</template>


<script>
export default{
    name: 'pagination',
    props: ['total', 'item'],
    data(){
        return{
            currentPage: 1
        }
    },
    computed:{
        totalPages(){
            return Math.ceil(this.total / this.item);
        }
    },
    methods:{
        changePage(pageNumber){
            this.currentPage = pageNumber
            this.$emit('page-changed', pageNumber)

        }
    }
}
</script>


<style>
.pagination-button {
    background: white;
    color:aqua;
    border: 1px solid black;
}
/* .active{
    background: blue;
} */
</style> -->