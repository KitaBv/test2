'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const partners = [
  {
    name: 'KudaGo',
    logo: '/images/kudago-logo.png',
    description: 'KudaGo - это сервис для поиска интересных мест и событий в вашем городе. Здесь вы найдете афишу мероприятий, рекомендации по местам и многое другое.',
    specialOffer: 'Специальное предложение: Скидка 20% на премиум-подписку KudaGo для всех клиентов Warpoint',
    image: '/images/kudago-image.jpg',
    website: 'https://kudago.com'
  },
  {
    name: 'Pixel Quest',
    logo: '/images/pixelquest-logo.png',
    description: 'Pixel Quest - это современная школа программирования для детей и подростков. Мы обучаем программированию через создание игр и интересных проектов.',
    specialOffer: 'Специальное предложение: Бесплатное пробное занятие для всех клиентов Warpoint',
    image: '/images/pixelquest-image.jpg',
    website: 'https://msk.pixelquest.ru'
  },
  {
    name: 'Teika Boom',
    logo: '/images/teikaboom-logo.png',
    description: 'Teika Boom - это креативное агентство, специализирующееся на создании уникальных мероприятий и праздников.',
    specialOffer: 'Специальное предложение: 15% скидка на организацию мероприятий для клиентов Warpoint',
    image: '/images/teikaboom-image.jpg',
    website: 'https://teikaboom.ru'
  }
];

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Image
                src="/images/warpoint-logo.png"
                alt="Warpoint Logo"
                width={150}
                height={50}
                className="h-12 w-auto"
              />
            </div>
            <nav className="hidden md:flex space-x-8">
              <Link href="#partners" className="text-gray-700 hover:text-gray-900">
                Партнёры
              </Link>
              <Link href="#about" className="text-gray-700 hover:text-gray-900">
                О нас
              </Link>
              <Link href="#contact" className="text-gray-700 hover:text-gray-900">
                Контакты
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Наши партнёры
            </h1>
            <p className="mt-6 text-xl text-blue-100">
              Откройте для себя эксклюзивные предложения от наших партнёров
            </p>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section id="partners" className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-105"
            >
              <div className="relative h-48">
                <Image
                  src={partner.image}
                  alt={partner.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-center mb-4">
                  <Image
                    src={partner.logo}
                    alt={`${partner.name} logo`}
                    width={120}
                    height={40}
                    className="h-10 w-auto"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {partner.name}
                </h3>
                <p className="text-gray-600 mb-4">{partner.description}</p>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="text-blue-800 font-medium">{partner.specialOffer}</p>
                </div>
                <a
                  href={partner.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-block bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
                >
                  Перейти на сайт
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
} 