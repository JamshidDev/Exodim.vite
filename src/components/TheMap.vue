<template >
  <div id="containers"></div>
</template>

<script>
export default {
  data() {
    return {
      topology: null,
    };
  },
  created() {
    this.mapLoad();
  },
  methods: {
    async mapLoad() {
      this.topology = await fetch(
        "https://code.highcharts.com/mapdata/countries/uz/uz-all.topo.json"
      ).then((response) => response.json());

      // Prepare demo data. The data is joined to map using value of 'hc-key'
      // property by default. See API docs for 'joinBy' for more info on linking
      // data and map.
        Highcharts.setOptions({
            downloadCSV:"Download CSV",
        });
      // Create the chart
      Highcharts.mapChart("containers", {
        chart: {
          map: this.topology,
          height: "700px",
          // plotBorderColor:"#FFC107"
        },

        title: {
          text: `O'zbekiston temir yo'llari Aksiyadorlik Jamiyati`,
        },

        subtitle: {
          text: "Source map: Uzbekistan",
        },

        mapNavigation: {
          enabled: true,
          buttonOptions: {
            verticalAlign: "bottom",
            enableDoubleClickZoomTo: true,
          },
        },
        mapView: {
          zoom: 6,
        },

        colorAxis: {
          min: 0,
        },

        series: [
          {
            data: [
              ["uz-fa", 10],
              ["uz-tk", 11],
              ["uz-an", 12],
              ["uz-ng", 13],
              ["uz-ji", 14],
              ["uz-si", 15],
              ["uz-ta", 16],
              ["uz-bu", 17],
              ["uz-kh", 18],
              ["uz-qr", 19],
              ["uz-nw", 20],
              ["uz-sa", 21],
              ["uz-qa", 22],
              ["uz-su", 23],
            ],
            name: "Viloyat nomi",
            states: {
              hover: {
                color: "#FFC107",
              },
            },
            dataLabels: {
              enabled: true,
              format: "{point.name}",
            },
            events: {
              click: (e) => {
                console.log(e.point);
              },
            },
          },
        ],
      });
    },
  },
  mounted() {},
};
</script>
<style lang="scss">
#container {
  height: 1000px;
  min-width: 900px;
  max-width: 1400px;
  margin: 0 auto;
}

.loading {
  margin-top: 10em;
  text-align: center;
  color: gray;
}
</style>