import { defineStore } from "pinia"
import { computed, reactive } from "vue"
import { Post } from "../interfaces"

const defaultPosts = [
    { title: 'Explorando el Espacio: La Nueva Frontera', subtitle: 'Un vistazo a las misiones espaciales actuales', date: '22/11/2023', isPublised: true },
    { title: 'Innovaciones en Energía Renovable', subtitle: 'Cómo el sol y el viento están moldeando el futuro', date: '21/11/2023', isPublised: false },
    { title: 'La Revolución de la Inteligencia Artificial', subtitle: 'Impacto y ética en la tecnología moderna', date: '23/11/2023', isPublised: true },
    { title: 'Maravillas del Mundo Antiguo', subtitle: 'Un viaje a través de monumentos históricos', date: '23/10/2023', isPublised: false },
    { title: 'Gastronomía Global: Sabores del Mundo', subtitle: 'Descubriendo platos exóticos y tradiciones culinarias', date: '23/03/2023', author: "Diego Alvarez", isPublised: true }
]

const getPostsFromStorage = (): Post[] => {
    const posts = localStorage.getItem('posts')
    if (posts !== null) {
        return JSON.parse(posts)
    } else {
        return null
    }
}

const mainStore = defineStore('main', () => {
    const posts: Post[] = reactive(getPostsFromStorage()) || reactive(defaultPosts)

    const publishedPosts = computed(() => {
        return posts.filter(x => x.isPublised)
    })

    const addPost = (post: Post) => {
        posts.push(post)
        localStorage.setItem('posts', JSON.stringify(posts))
    }
    const deletePost = (id: number) => {
        posts.splice(id, 1)
        localStorage.setItem('posts', JSON.stringify(posts))
    }
    const getPost = (id: number) => {
        return posts[id]
    }
    const setPost = (id: number, post: Post) => {
        posts[id] = post
        localStorage.setItem('posts', JSON.stringify(posts))
    }

    return { posts, publishedPosts, addPost, deletePost, getPost, setPost }
})

export default mainStore