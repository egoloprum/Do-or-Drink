"use client"

import { useEffect, useState } from "react"

type Card = {
  id: number
  description: string
}

const CardData = [
  {
    id: 1,
    description: "Text a random number 'u up? or finish your drink."
  },
  {
    id: 2,
    description: "Attempt to do the worm or finish your drink."
  },
  {
    id: 3,
    description: "Give your phone to the person on your right and let them text a contact of their choice or finish your drink."
  },
  {
    id: 4,
    description: "Let the group go through your phones photo gallery for 60 secs or finish your drink."
  },
  {
    id: 5,
    description: "Reveal to everyone in the group how many people you've kissed and rate them 1-10 or finish your drink."
  },
  {
    id: 6,
    description: "Let the person to your left slap you in the face or finish your drink."
  },
  {
    id: 7,
    description: "On the count of three, everyone point to the player who has the lowest standards. The player with the most votes must drink."
  },
  {
    id: 8,
    description: "Confess who out of the group you would fuck marry, and kill or finish your drink."
  },
  {
    id: 9,
    description: "Say who in the group you think has big dick energy or finish your drink."
  },
  {
    id: 10,
    description: "Ask someone else a question. if they answer, you drink. if they don't, they drink."
  },
  {
    id: 11,
    description: "Let the group view your search history or finish your drink."
  },
  {
    id: 12,
    description: "Turn your phone off for the rest of the game. If you turn it back on for any reason, finish your drink."
  },
  {
    id: 13,
    description: "The person on your left is now your master. Do everything they say for one round or finish your drink."
  },
  {
    id: 14,
    description: "Let the person next to you send an eggplant emoji to someone in your phone or finish your drink."
  },
  {
    id: 15,
    description: "Lay on the ground and let someone pour a shot in your mouth."
  },
  {
    id: 16,
    description: "Spin around 10 times then try to walk in a straight line. If failed finish your drink."
  },
  {
    id: 17,
    description: "Name at least 3 types of sex toys or finish your drink."
  },
  {
    id: 18,
    description: "Go shirtless for one round or finish your drink."
  },
  {
    id: 19,
    description: "Do 10 pushups successfully or finish your drink."
  },
  {
    id: 20,
    description: "Bark like a dog everytime someone talks to you until it's your turn again. If failed finish your drink."
  },
  {
    id: 21,
    description: "Name at least three porn stars or finish your drink."
  },
  {
    id: 22,
    description: "Give the person to your right a back massage for at least 30 seconds or finish your drink."
  },
  {
    id: 23,
    description: "Show everyone all of your tattoos or Finish your drink (if you don't have any tattoos then finish your drink)"
  },
  {
    id: 24,
    description: "Say which player is most likely to have a three some or finish your drink."
  },  
  {
    id: 25,
    description: "Eat a spoonful of whatever the person to your right chooses or finish your drink."
  },
  {
    id: 26,
    description: "You cannot laugh for the next two rounds. If failed, drink."
  },
  {
    id: 27,
    description: "Simultaneously hop on one foot, pat your head, and rub your belly for 10 seconds wo messing up. If failed, drink."
  },
  {
    id: 28,
    description: "Let everyone guess your bodycount or finish your drink."
  },
  {
    id: 29,
    description: "Say your fav feature about everyone in the room or finish your drink."
  },
  {
    id: 30,
    description: "Tell everyone your most embarrassing story or finish your drink."
  },
  {
    id: 31,
    description: "Try to shoot a balled up peice of paper or trash into the garbage If you miss, drink twice. If you make it, everybody in the room finishes their drinks."
  },
  {
    id: 32,
    description: "Name at least three different drugs harder than weed or finish your drink."
  },
  {
    id: 33,
    description: "Girls drink."
  },
  {
    id: 34,
    description: "Guys drink."
  },
  {
    id: 35,
    description: "Youngest drink."
  },
  {
    id: 36,
    description: "Oldest drink."
  },
  {
    id: 37,
    description: "Guess the colour of the person's underwear to ur left. If failed you drink, and vice versa."
  },
  {
    id: 38,
    description: "Drink if a bird has ever shat on you."
  },
  {
    id: 39,
    description: "Most sober drink."
  },
  {
    id: 40,
    description: "Drink if ur not a virgin."
  },
  {
    id: 41,
    description: "Drink if ur a virgin."
  }
] as Card[]

function getRandomNumber(min: number, max: number, choicesSelected: number[]): number {
  let randomNumber: number;

  do {
      randomNumber = Math.floor(Math.random() * (max - min + 1)) + min
  } while (choicesSelected.includes(randomNumber))

  return randomNumber
}

const Card = () => {
  const [choicesSelected, setChoicesSelected] = useState<number[]>(() => {
    const storedChoices = localStorage.getItem('choicesSelected')
    return storedChoices ? JSON.parse(storedChoices) : []
  })

  const [selectedCard, setSelectedCard] = useState<Card>({ id: 0, description: "" })
  const [allCardsSelected, setAllCardsSelected] = useState<boolean>(false)

  const handleNewCard = () => {

    if (choicesSelected.length !== CardData.length) {
      const randomNumber = getRandomNumber(0, 40, choicesSelected)
      setSelectedCard(CardData[randomNumber])
  
      setChoicesSelected((prev) => [...prev, randomNumber])
    }
    else {
      setAllCardsSelected(true)
    }
  }

  const handleResetCards = () => {
    setChoicesSelected([])
    setAllCardsSelected(false)
  }

  useEffect(() => {
    localStorage.setItem('choicesSelected', JSON.stringify(choicesSelected))
  }, [choicesSelected])

  return (
    <>

      <div className="border rounded-xl my-4 p-4 flex justify-center items-center h-64 text-center text-xl">

        {allCardsSelected ? (
          <p>No more cards available.</p>
        ) : !selectedCard.description ? (
          <p>Please click on new card button.</p>
        ) : (
          <p>{selectedCard.description}</p>
        )}

      </div>

      <div className="flex gap-4 justify-center w-full">

        <div className="w-full flex">
          <button onClick={handleNewCard} 
            className="border-4 py-2 max-w-36 w-full rounded bg-btn_bg_color 
              border-btn_border_color text-text_white font-bold">New card</button>
        </div>


        <div className="w-full flex justify-end">
          <button onClick={handleResetCards}  
            className="border-4 py-2 max-w-36 w-full rounded bg-btn_bg_color 
              border-btn_border_color text-text_white font-bold">Reset cards</button>
        </div>

      </div>
    
    </>
  )
}

export default Card
