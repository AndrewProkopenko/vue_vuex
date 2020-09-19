<template>
    <div class="row justify-content-center mb-5">
        <div class="col">
            <div class="card card-default shadow">
                <div class="card-header d-flex align-items-center justify-content-between">
                    <h4>Posts</h4> <router-link :to='{name: "create"}' class="btn btn-vue">Add New Post</router-link>
                </div>
                <div class="card-body position-relative" >
                    <div class="table-responsive"  v-if="posts.length > 0" >
                        <table class="table table-hover"> 
                            <thead>
                               <tr>
                                    <th>Title</th>
                                    <th>Content</th>
                                    <th>Actions</th>
                               </tr>
                            </thead>
                            <tbody>
                                <tr v-for="post in posts" :key='post._id'>
                                    <td> 
                                        {{ post.title}} 
                                    </td>
                                    <td>
                                        {{post.content}}
                                    </td>
                                    <td>
                                        <router-link :to="{name:'edit', params:{id: post._id}}" class="btn btn-vue">
                                            <i class="fa fa-edit"></i>
                                        </router-link>
                                        <button class="btn btn-danger ml-2" @click="deletePostLocal(post._id)">
                                            <i class="fa fa-trash"></i>
                                        </button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div  v-if="!posts.length" class="d-flex justify-content-between"> 
                        
                            <span>  The list of posts is empty... </span>
                            <span class="empty-post">Go to Create!</span>
                        
                    </div>

                    <Preloader v-if="preloaderShow" /> 
                </div>
               
            </div>
        </div>
    </div>
</template>

<script>
import {mapState, mapActions} from "vuex";

import Preloader from '../Preloader/Preloader'

export default {   
    data() {
        return {
            preloaderShow: true 
        }
    },

    components: { 
        Preloader
    }, 
    computed: { 
        ...mapState([
            'posts'
        ]) 
    },  
    created() {  
        this.fetchPost()   
            .then(
                setTimeout( ()=>{
                    this.preloaderShow = false
                }, 500)
            )
    },
    methods: {
        ...mapActions([
            'fetchPost', 
            'deletePost'
        ]),
        deletePostLocal: function(id) {
            this.deletePost(id)
        }
        
        
    }
}
</script>


<style scoped>
    table { margin: 0;}
    tbody tr td  { 
        vertical-align: middle;
    }
    td { 
        border: 0 !important;
    }
    thead tr th:last-child { 
        width: 120px;
    }
    thead tr th:nth-child(2) { 
        width: 60%;
    }
</style>