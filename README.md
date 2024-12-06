build parkinglot to be able to display parking slots for a parking following this requiremnts: Background: As a Parking Manager, I am responsible for managing three parking lots: ● The Plaza Park (9 parking capacity) ● City Mall Garage (12 parking capacity) ● Office Tower Parking (9 parking capacity)

implement 3 parking lots and make it display the parking slots in a max 3 width column and rows

implement 3 parking lots and make it display the parking slots in a max 3 width column and rows ● The Plaza Park (9 parking capacity) ● City Mall Garage (12 parking capacity) ● Office Tower Parking (9 parking capacity)

@workspace implement the tickets as car to place them in the corresponding parking lot, the following is the request for /parking-lot [ { "id": 1, "name": "The Plaza Park", "tickets": [ { "plateNumber": "CX23123", "position": 1, "parkingLot": 1 }, { "plateNumber": "AB98564", "position": 2, "parkingLot": 1 } ], "capacity": 9, "availableCapacity": 7, "availablePositionRate": 0.7777777777777778, "full": false }, { "id": 2, "name": "City Mall Garage", "tickets": [ { "plateNumber": "RT73123", "position": 2, "parkingLot": 2 }, { "plateNumber": "LS23211", "position": 1, "parkingLot": 2 }, { "plateNumber": "R1RMYJJ", "position": 3, "parkingLot": 2 } ], "capacity": 12, "availableCapacity": 9, "availablePositionRate": 0.75, "full": false }, { "id": 3, "name": "Office Tower Parking", "tickets": [ { "plateNumber": "ON67999", "position": 1, "parkingLot": 3 } ], "capacity": 9, "availableCapacity": 8, "availablePositionRate": 0.8888888888888888, "full": false } ]

where is the grid

@workspace implemement the fetching api from parking.js to the parking controls by making the fetch button to send the request body in this format: { "plateNumber": "1111", "position": 3, "parkingLot": 1 } on button click when a license is entered

@workspace update the reducer action handling to handle the dispatch, the response of the api is in this format: { "plateNumber": "1111" } the corresponding ticket with the same license number in the stored state should be removed.
The state is storing the data in this format: [ { "id": 1, "name": "The Plaza Park", "tickets": [ { "plateNumber": "CX23123", "position": 1, "parkingLot": 1 }, { "plateNumber": "AB98564", "position": 2, "parkingLot": 1 } ], "capacity": 9, "full": false, "availablePositionRate": 0.7777777777777778, "availableCapacity": 7 }, { "id": 2, "name": "City Mall Garage", "tickets": [ { "plateNumber": "ONL7999", "position": 3, "parkingLot": 2 }, { "plateNumber": "LS23211", "position": 1, "parkingLot": 2 }, { "plateNumber": "R1RMYJJ", "position": 2, "parkingLot": 2 } ], "capacity": 12, "full": false, "availablePositionRate": 0.75, "availableCapacity": 9 }, { "id": 3, "name": "Office Tower Parking", "tickets": [ { "plateNumber": "RT73123", "position": 1, "parkingLot": 3 } ], "capacity": 9, "full": false, "availablePositionRate": 0.8888888888888888, "availableCapacity": 8 } ]

add license plate validation for the input: License plates must follow the format standard: two letters + four digits (e.g., “AB-1234”). The system must reject empty or invalid license plate entries.

add checking to check if the plate number is already parked, if yes, do not park the car and display alert

add checking if the license plate is already parked when fetching car, if no, do not fetch car
