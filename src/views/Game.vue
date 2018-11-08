<template>
<div class="container">
    <div class="alert alert-success">
        dank meme
    </div>
    <div class="row">
        <div class="col-md-4">
            <div class="card" style="width: 18rem;">
                <h5 class="card-header">
                    Players
                    <a class="btn btn-small" @click.prevent="login"
                    v-if="PlayerID() === null">+</a>
                </h5>
                <p v-if="PlayerID() !== null">Welcome, {{state.players[PlayerID()].name}}!</p>
                <p>Count: {{state.players.length}}</p>
                <ul class="list-group list-group-flush">
                    <li v-for="p in state.players" class="list-group-item" :key="p">
                        <img>
                        {{p.name}}
                        <span class="badge badge-pill badge-secondary" v-if="p.id == state.dealerId">
                          Dealer
                        </span>
                        <span class="badge badge-primary badge-pill">{{p.score}}</span>
                    </li>
                </ul>
            </div>
        </div>
        <div class="col-md-4">
            <div class="card-body">
                <h5 class="card-title">My Captions</h5>
                <ul class="list-group list-group-flush">
                    <li v-for="c in myCaptions" class="list-group-item" 
                    :key="c">{{c}}
                            <a  v-if="!isDealer"
                            @click.prevent="SubmitCaption(c)"
                            class="btn btn-primary btn-sm">Submit</a></li>
                </ul>
            </div>
        </div>
        <div class="col-md-4">
            <div class="card" style="width: 18rem;">
                <img class="card-img" :src="state.picture.url" :alt="state.picture.name">
                <a @click.prevent="flipPicture" class="btn btn-primary" v-if="isDealer">Flip Picture</a>
            </div>
        </div>
        <div class="col-md-4">
            <div class="card" >
                <h5 class="card-header">Played Captions</h5>
                <ul class="list-group list-group-flush">
                    <li v-for="c in state.playedCaptions" :key="c.text"
                        class="list-group-item" :class="{ 'list-group-item-warning' : c.isChosen }">
                        {{ c.text }}
                        <div>
                            <a  v-if="isDealer"
                                @click.prevent="ChooseCaption(c)"
                                class="btn btn-primary btn-sm">Choose</a>
                        </div>
                        <span class="badge" :class="c.playerName ? 'badge-success' : 'badge-secondary'">
                          {{c.playerName || "Hidden"}}
                        </span>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import * as api from "@/services/api_access";

let loopTimer = null;

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
  created() {
    loopTimer = setInterval(this.refresh, 1000);
    if (api.PlayerID && this.myCaptions.length > 0) {
    }
  },
  methods: {
    flipPicture() {
      api
        .FlipPicture()
        .then(x => api.GetState().then(x => (this.state = x)))
        .then(this.refresh);
    },
    login() {
      api.Login(prompt("what is ur name")).then(this.refresh);
    },
    refresh() {
      api
        .GetState()
        .then(x => (this.state = x))
        .then(api.GetMyCaptions().then(x => (this.myCaptions = x)));
    },
    PlayerID: () => api.PlayerID,
    SubmitCaption(caption) {
      api.SubmitCaption(caption).then(this.refresh);
    },
    ChooseCaption(caption) {
      api
        .ChooseCaption(caption)
        .then(x => {
          this.playedCaptions = [];
          this.state.playedCaptions = [];
        })
        .then(this.refresh);
    }
  },
  computed: {
    isDealer() {
      return this.PlayerID() == this.state.dealerId;
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
