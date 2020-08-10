export default {
  async index() {
    const res = await fetch("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1")

    const {deck_id} = await res.json()
console.log(deck_id)

  },
}


