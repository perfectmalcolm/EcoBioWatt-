import express from 'express';
const router = express.Router();

// Mock fleet data
const mockFleetData = [
  {
    id: 'FL001',
    vehicle: 'Truck A',
    status: 'In Transit',
    location: '34.0522, -118.2437', // Los Angeles
    deliveryEfficiency: 92,
    lastMaintenance: '2025-10-20',
    driver: 'John Doe',
    route: 'LAX-SFO',
    eta: '2025-10-31T10:00:00Z'
  },
  {
    id: 'FL002',
    vehicle: 'Van B',
    status: 'Delivered',
    location: '37.7749, -122.4194', // San Francisco
    deliveryEfficiency: 95,
    lastMaintenance: '2025-10-15',
    driver: 'Jane Smith',
    route: 'SFO-SEA',
    eta: '2025-10-30T14:30:00Z'
  },
  {
    id: 'FL003',
    vehicle: 'Truck C',
    status: 'Maintenance',
    location: '34.0522, -118.2437', // Los Angeles
    deliveryEfficiency: 88,
    lastMaintenance: '2025-10-28',
    driver: 'Peter Jones',
    route: 'LAX-PHX',
    eta: '2025-11-01T08:00:00Z'
  },
  {
    id: 'FL004',
    vehicle: 'Van D',
    status: 'Idle',
    location: '37.7749, -122.4194', // San Francisco
    deliveryEfficiency: 90,
    lastMaintenance: '2025-10-22',
    driver: 'Alice Brown',
    route: 'SFO-LAX',
    eta: '2025-10-31T18:00:00Z'
  },
];

router.get('/', (req, res) => {
  res.json(mockFleetData);
});

export default router;
