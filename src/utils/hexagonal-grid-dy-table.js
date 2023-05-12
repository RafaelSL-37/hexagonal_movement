/* 
    Each cell corresponds to one direction in the hexagonal grid.
    0 - E (Leste)
    1 - SE (Sudeste)
    2 - SW (Sudoeste)
    3 - W (Oeste)
    4 - NW (Noroeste)
    5 - NE (Nordeste)
    
    Odd Position on Grid:
     (NW) (NE)
    (W) (P) (E)
     (SW) (SE)

    Even Position on Grid:
    () (NW) (NE)
      (W) (P) (E)
    () (SW) (SE)
*/

export const differenceBasedOnDirectionForOdd = [
    {dy: 0, dx: 1},
    {dy: 1, dx: 0},
    {dy: 1, dx: -1},
    {dy: 0, dx: -1},
    {dy: -1, dx: -1},
    {dy: -1, dx: 0},
]

export const differenceBasedOnDirectionForEven = [
    {dy: 0, dx: 1},
    {dy: 1, dx: 1},
    {dy: 1, dx: 0},
    {dy: 0, dx: -1},
    {dy: -1, dx: 0},
    {dy: -1, dx: 1},
]