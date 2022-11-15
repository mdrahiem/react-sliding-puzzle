# Items to do:

##### Business requirements

- [x] A game field of 3x3 with 8 blocks and one gap; if a block is clicked that borders the gap, it moves into the gap
- [x] Random start locations; but without any duplicate blocks
- [x] The blocks are numbered; 1 to 8
- [x] Responsiveness; the game size adjusts to the screen size.
- [x] A counter tracking the number of moves
- [ ] Parts of an image instead of numbers in the blocks
- [x] Win condition; if successfully completed, give some kind of feedback
- [x] Dynamic number of blocks; some kind of input whereby the size of the game (and number of blocks) can be increased from 3x3 to any dimension

- [x] Reset and back buttons
- [x] Home screen with choose game mode option

##### Code (My) requirements

- [x] Unit tests and component tests
- [x] DRY Types
- [x] Code segregation
- [x] Performance

_Notes:_

- Intentinoally didn't make puzzle container small wrt the viewport as it would make the game not playable in smaller screens.
- Didn't implement canvas mock to test "winning-message" component
