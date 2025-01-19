Todo

- generate 2 random cat images
- with these images, we want to generate a health value, damage value and name
- onclicking a cat, you take the opposite cat's damage and subtract the health of clicked cat by that damage (attack)
- when one of the cat's health reaches or passes zero, the winning cat is moved to the top of the screen and new cat opponents are generated
- extra functionality: winning cats health is regenerated. after there are two winners, they become opponents for the "final battle"
- extra functionality. Winner history: on a seperate page, view the winner history of which cat battled which, and who won.
- extra damage is ranged, on click chooses random number between range to deal dammage.

Components:

- Cat cards:

  - name
  - image
  - max health
  - damage number

- "Arena"

  - display 2 random generated cat cards
  - have the click attack functionality
  - designate the winner (track which cat reaches zero health first)

- Winner Box
