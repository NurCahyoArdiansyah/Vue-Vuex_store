<script>
import { mapActions, mapState, mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters("userTeacher", ["teacher"]),
  },
  methods: {
    ...mapActions("userTeacher", ["getTeacher"]),
  },
  mounted() {
    this.getTeacher();
  },
};
</script>
<template>
  <div>
    <table border="1">
      <thead>
        <tr>
          <th>Nama</th>
          <th>Alamat</th>
          <th>Mapel</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in teacher" :key="item.id">
          <td>{{ item.nama }}</td>
          <td>{{ item.alamat }}</td>
          <td>{{ item.mapel }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
