/**
 * Synthetic Lead Generator
 * Used for development and testing to avoid using real customer data.
 * Aligns with PDPL and DESC security standards.
 */

const services = [
  'Weekly Maintenance',
  'Chemical Balancing',
  'Technical Repairs',
  'Green Pool Recovery'
];

const firstNames = ['Omar', 'Sarah', 'Ahmed', 'Fatima', 'John', 'Elena'];
const lastNames = ['Al-Mansoori', 'Smith', 'Hassan', 'Zayed', 'Doe', 'Khan'];
const areas = ['Yas Island', 'Saadiyat', 'Khalifa City', 'Al Reem', 'Mussafah'];

export const generateSyntheticLead = () => {
  const fName = firstNames[Math.floor(Math.random() * firstNames.length)];
  const lName = lastNames[Math.floor(Math.random() * lastNames.length)];
  const area = areas[Math.floor(Math.random() * areas.length)];
  const service = services[Math.floor(Math.random() * services.length)];

  return {
    firstName: fName,
    lastName: lName,
    email: `${fName.toLowerCase()}.${lName.toLowerCase()}@test.local`,
    phone: `+97150${Math.floor(1000000 + Math.random() * 9000000)}`,
    address: `${area}, Abu Dhabi, UAE`,
    service: service,
    message: `This is a synthetic lead generated for testing ${service} in ${area}.`,
    status: 'synthetic_test',
    createdAt: new Date().toISOString()
  };
};

// Log 5 sample leads to console
console.log("--- GENERATING 5 SYNTHETIC LEADS ---");
for(let i=0; i<5; i++) {
  console.log(generateSyntheticLead());
}
