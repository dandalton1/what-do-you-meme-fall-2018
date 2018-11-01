<template>
<div class="container">
    <div class="alert alert-success">
        dank meme
    </div>
    <div class="row">
        <div class="col-md-4">
            <div class="card" style="width: 18rem;">
                <img class="card-img-top" src="" alt="Card image caption" />
                <div class="card-body">
                    <h5 class="card-title">Players</h5>
                    <p class="card-text">Some example</p>
                    <a href="#" class="btn btn-primary">Go Somewhere...</a>
                </div>
            </div>
        </div>
        <div class="col-md-4">
            <div class="card-body">
                <h5 class="card-title">My Captions</h5>
                    <ul class="list-group list-group-flush">
                        <li v-for="c in myCaptions" class="list-group-item">{{c}}</li>
                    </ul>
            </div>
        </div>
        <div class="col-md-4">
            <div class="card" style="width: 18rem;">
                <img class="card-img-top" src="" alt="Card image caption" />
                <div class="card-body">
                    <h5 class="card-title">Played Captions</h5>
                    <p class="card-text">Some example</p>
                    <a href="#" class="btn btn-primary">Go Somewhere...</a>
                </div>
            </div>
        </div>
        <div class="col-md-4">
            <div class="card" style="width: 18rem;">
                <img class="card-img" :src="state.picture.url" :alt="state.picture.name">
                <a @click.prevent="flipPicture" class="btn btn-primary">Flip Picture</a>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import { GetState, FlipPicture, GetMyCaptions } from '@/services/api_access';

export default {
  name: "game",
  data: function() {
    return {
      state: {
        picture: "",
        players: [],
        playedCaptions: [],
      },
      myCaptions: []
    }
  },
  created: function() {
    GetState().then(x => (this.state = x));
    GetMyCaptions().then(x => (this.myCaptions = x));
  },
  methods: {
    flipPicture: function() {
      FlipPicture().then(x => GetState().then(x => (this.state = x)));
    }
  }
};
</script>

<style lang="scss">
</style>
