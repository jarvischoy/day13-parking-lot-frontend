build parkinglot to be able to display parking slots for a parking following this requiremnts: Background: As a Parking Manager, I am responsible for managing three parking lots: ● The Plaza Park (9 parking capacity) ● City Mall Garage (12 parking capacity) ● Office Tower Parking (9 parking capacity)

implement 3 parking lots and make it display the parking slots in a max 3 width column and rows

implement 3 parking lots and make it display the parking slots in a max 3 width column and rows ● The Plaza Park (9 parking capacity) ● City Mall Garage (12 parking capacity) ● Office Tower Parking (9 parking capacity)

@workspace implement the tickets as car to place them in the corresponding parking lot, the following is the request for /parking-lot [ { "id": 1, "name": "The Plaza Park", "tickets": [ { "plateNumber": "CX23123", "position": 1, "parkingLot": 1 }, { "plateNumber": "AB98564", "position": 2, "parkingLot": 1 } ], "capacity": 9, "availableCapacity": 7, "availablePositionRate": 0.7777777777777778, "full": false }, { "id": 2, "name": "City Mall Garage", "tickets": [ { "plateNumber": "RT73123", "position": 2, "parkingLot": 2 }, { "plateNumber": "LS23211", "position": 1, "parkingLot": 2 }, { "plateNumber": "R1RMYJJ", "position": 3, "parkingLot": 2 } ], "capacity": 12, "availableCapacity": 9, "availablePositionRate": 0.75, "full": false }, { "id": 3, "name": "Office Tower Parking", "tickets": [ { "plateNumber": "ON67999", "position": 1, "parkingLot": 3 } ], "capacity": 9, "availableCapacity": 8, "availablePositionRate": 0.8888888888888888, "full": false } ]

where is the grid
