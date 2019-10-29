/**
 * Created by 123 on 2019/10/25.
 */
const backtop=()=>import('components/common/backtop.vue')
export const backTop={
  data(){
    return{
      backtop:true,
    }
  },
  components:{
    backtop
  },
  methods:{
    backclick(){
      this.$refs.scroll.scroll.scrollTo(0,0,500)
    }
  }
}
