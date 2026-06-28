// prisma/seed.ts
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Seeding database...');

  // Clear existing data
  await prisma.shortlist.deleteMany();
  await prisma.cutoff.deleteMany();
  await prisma.college.deleteMany();

  const collegesData = [
    {
      name: "College of Engineering, Pune (COEP)",
      city: "Pune",
      type: "Government",
      university: "Savitribai Phule Pune University",
      feesMin: 80000,
      feesMax: 120000,
      avgPlacement: 12.5,
      hostel: true,
    },
    {
      name: "Vishwakarma Institute of Technology (VIT)",
      city: "Pune",
      type: "Private",
      university: "Savitribai Phule Pune University",
      feesMin: 150000,
      feesMax: 200000,
      avgPlacement: 8.5,
      hostel: true,
    },
    {
      name: "Pune Institute of Computer Technology (PICT)",
      city: "Pune",
      type: "Private",
      university: "Savitribai Phule Pune University",
      feesMin: 140000,
      feesMax: 180000,
      avgPlacement: 11.2,
      hostel: true,
    },
    {
      name: "Veermata Jijabai Technological Institute (VJTI)",
      city: "Mumbai",
      type: "Government",
      university: "University of Mumbai",
      feesMin: 90000,
      feesMax: 130000,
      avgPlacement: 13.5,
      hostel: true,
    },
    {
      name: "Sardar Patel Institute of Technology (SPIT)",
      city: "Mumbai",
      type: "Private",
      university: "University of Mumbai",
      feesMin: 160000,
      feesMax: 210000,
      avgPlacement: 9.8,
      hostel: true,
    },
    {
      name: "K. J. Somaiya College of Engineering",
      city: "Mumbai",
      type: "Private",
      university: "University of Mumbai",
      feesMin: 180000,
      feesMax: 220000,
      avgPlacement: 8.2,
      hostel: true,
    },
    {
      name: "Walchand College of Engineering",
      city: "Sangli",
      type: "Government",
      university: "Shivaji University",
      feesMin: 70000,
      feesMax: 100000,
      avgPlacement: 7.8,
      hostel: false,
    },
    {
      name: "MIT World Peace University",
      city: "Pune",
      type: "Private",
      university: "MIT WPU",
      feesMin: 200000,
      feesMax: 280000,
      avgPlacement: 7.5,
      hostel: true,
    },
    {
      name: "Symbiosis Institute of Technology (SIT)",
      city: "Pune",
      type: "Private",
      university: "Symbiosis International",
      feesMin: 250000,
      feesMax: 320000,
      avgPlacement: 9.0,
      hostel: true,
    },
    {
      name: "Dr. D. Y. Patil College of Engineering",
      city: "Pune",
      type: "Private",
      university: "SPPU",
      feesMin: 130000,
      feesMax: 170000,
      avgPlacement: 6.8,
      hostel: true,
    },
    {
      name: "Rajarshi Shahu College of Engineering",
      city: "Pune",
      type: "Private",
      university: "SPPU",
      feesMin: 120000,
      feesMax: 160000,
      avgPlacement: 7.2,
      hostel: true,
    },
    {
      name: "Bharati Vidyapeeth College of Engineering",
      city: "Pune",
      type: "Private",
      university: "Bharati Vidyapeeth",
      feesMin: 140000,
      feesMax: 190000,
      avgPlacement: 6.5,
      hostel: true,
    },
    {
      name: "Government College of Engineering, Nagpur",
      city: "Nagpur",
      type: "Government",
      university: "RTM Nagpur University",
      feesMin: 75000,
      feesMax: 110000,
      avgPlacement: 8.0,
      hostel: true,
    },
    {
      name: "Shri Guru Gobind Singhji Institute of Engineering",
      city: "Nanded",
      type: "Government",
      university: "SRTMU",
      feesMin: 65000,
      feesMax: 95000,
      avgPlacement: 7.0,
      hostel: true,
    },
    {
      name: "AISSMS College of Engineering",
      city: "Pune",
      type: "Private",
      university: "SPPU",
      feesMin: 135000,
      feesMax: 175000,
      avgPlacement: 7.9,
      hostel: true,
    },
  ];

  for (const data of collegesData) {
    await prisma.college.create({ data });
  }

  console.log(`✅ Successfully seeded ${collegesData.length} colleges!`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });