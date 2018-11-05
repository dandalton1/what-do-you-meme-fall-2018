<template>
<div class="container">
    <div class="alert alert-success">
        dank meme
    </div>
    <div class="row">
        <div class="col-md-4">
            <div class="card" style="width: 18rem;">
                <img class="card-img-top" src="" alt="Card image caption" />
                <h5 class="card-header">
                    Players
                    <a class="btn btn-small" @click.prevent="login">+</a>
                </h5>
                <p>Count: {{state.players.length}}</p>
                <ul class="list-group list-group-flush">
                    <li v-for="p in state.players" class="list-group-item" :key="p">
                        <img>
                        {{p.name}} <span class="badge badge-primary badge-pill">{{p.score}}</span>
                    </li>
                </ul>
            </div>
        </div>
        <div class="col-md-4">
            <div class="card-body">
                <h5 class="card-title">My Captions</h5>
                <ul class="list-group list-group-flush">
                    <li v-for="c in myCaptions" class="list-group-item" :key="c">{{c}}</li>
                </ul>
            </div>
        </div>
        <div class="col-md-4">
            <div class="card" style="width: 18rem;">
                <img class="card-img" :src="state.picture.url" :alt="state.picture.name">
                <a @click.prevent="flipPicture" class="btn btn-primary">Flip Picture</a>
            </div>
        </div>
        <div class="col-md-4">
            <div class="card" style="width: 18rem;">
                <h5 class="card-title">Played Captions</h5>
                <ul class="list-group list-group-flush">
                    
                </ul>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import {
  GetState,
  FlipPicture,
  GetMyCaptions,
  Login,
  PlayerID
} from "@/services/api_access";

export default {
  name: "game",
  data: function() {
    return {
      state: {
        picture: "",
        players: [],
        playedCaptions: []
      },
      myCaptions: []
    };
  },
  created: function() {
    this.refresh();
  },
  methods: {
    flipPicture() {
      FlipPicture()
        .then(x => GetState().then(x => (this.state = x)))
        .then(this.refresh);
    },
    login() {
      Login(prompt("what is ur name")).then(this.refresh);
    },
    refresh() {
      GetState()
        .then(x => (this.state = x))
        .then(GetMyCaptions().then(x => (this.myCaptions = x)));
    }
  }
};
</script>

<style lang="scss" scoped>
li {
  display: flex;
  align-content: center;
  justify-content: space-between;
  img {
    width: 30px;
    height: 30px;
    margin-right: 5px;
  }
  h5 {
    flex-grow: 1;
  }
}
</style>
