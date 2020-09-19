import Vue from 'vue'
import Vuex from 'vuex' 

import { axios } from '@/plugins/axios'
const axiosPlugin = store => {
  store.$axios = axios
}
 
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    posts: [], 
    post: []
  },
  mutations: {
    ADD_POST: (state, post) => {
      state.posts.push(post)
    }, 
    FETCH_POST: (state, posts) => {  
      state.posts = posts
    }, 
    FILTER_AFTER_DELETE: (state, id) => { 
      state.posts = state.posts.filter((post) => post._id  !== id )
    },
    GET_POST_TO_UPDATE: (state, post) => { 
      state.post = post
    }, 
    UPDATE_POST: (state, posts) => {  
      state.posts = posts 
    }, 
    
  },
  actions: {
    addPost: function (context, post) {  
      this.$axios.post('http://localhost:4000/posts/add', post)
        .then(
           context.commit('ADD_POST', post)
        )
    }, 
    fetchPost:  function(context) {  
      this.$axios.get('http://localhost:4000/posts')
        .then(response => {  
           setTimeout(() => {
              context.commit('FETCH_POST', response.data)
           }, 100);
        })
    }, 
    deletePost: function(context, id) {  
      this.$axios.delete(`http://localhost:4000/posts/delete/${id}`)
        .then(
          context.commit('FILTER_AFTER_DELETE', id)
        )
    }, 
    updatePost: function(context, dataPost) {   
       
      this.$axios.post(`http://localhost:4000/posts/update/${dataPost.id}`, dataPost.post)
        .then( () => {  
          context.commit('UPDATE_POST', dataPost.post) 
      })
    },
    getPostToUpdate: function (context, id) { 
      this.$axios.get(`http://localhost:4000/posts/edit/${id}`)
        .then( response => {  
          context.commit('GET_POST_TO_UPDATE', response.data)
        })
    }
  },
  plugins: [axiosPlugin], 
  modules: {
  }
})
