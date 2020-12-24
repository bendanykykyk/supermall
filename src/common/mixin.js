import BackTop from "components/content/backTop/BackTop";
export const backTopMixin = {
  components: {
    BackTop
  },
  data() {
    return {
      position: 0
    };
  },
  methods: {
    scrollContent(position) {
      this.position = position;
    },
    backTopClick() {
      this.$refs.scroll.scrollTo(0, 0, 300);
    }
  },
  computed: {
    showBackTop() {
      return Math.abs(this.position.y) >= 1000;
    }
  }
};
