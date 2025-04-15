'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const partners = [
  {
    name: 'KudaGo',
    logo: '/images/kudago-logo.svg',
    description: 'KudaGo - это сервис для поиска интересных мест и событий в вашем городе. Здесь вы найдете афишу мероприятий, рекомендации по местам и многое другое.',
    specialOffer: 'Специальное предложение: Скидка 20% на премиум-подписку KudaGo для всех клиентов Warpoint',
    image: '/images/kudago-image.jpg',
    website: 'https://kudago.com'
  },
  {
    name: 'Pixel Quest',
    logo: '/images/pixelquest-logo.svg',
    description: 'Pixel Quest - это современная школа программирования для детей и подростков. Мы обучаем программированию через создание игр и интересных проектов.',
    specialOffer: 'Специальное предложение: Бесплатное пробное занятие для всех клиентов Warpoint',
    image: '/images/pixelquest-image.jpg',
    website: 'https://msk.pixelquest.ru'
  },
  {
    name: 'Teika Boom',
    logo: '/images/teikaboom-logo.svg',
    description: 'Teika Boom - это креативное агентство, специализирующееся на создании уникальных мероприятий и праздников.',
    specialOffer: 'Специальное предложение: 15% скидка на организацию мероприятий для клиентов Warpoint',
    image: '/images/teikaboom-image.jpg',
    website: 'https://teikaboom.ru'
  }
];

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="bg-black border-b border-gray-800">
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
              <Link href="#partners" className="text-gray-300 hover:text-white transition-colors">
                Партнёры
              </Link>
              <Link href="#about" className="text-gray-300 hover:text-white transition-colors">
                О нас
              </Link>
              <Link href="#contact" className="text-gray-300 hover:text-white transition-colors">
                Контакты
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-black text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/vr-bg.svg')] bg-cover bg-center opacity-30"></div>
        <div className="max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h1 className="text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl text-blue-400">
              Наши партнёры
            </h1>
            <p className="mt-6 text-xl text-blue-200 max-w-3xl mx-auto">
              Откройте для себя эксклюзивные предложения от наших партнёров
            </p>
            <div className="mt-10">
              <a href="#partners" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-md text-lg font-medium transition-colors">
                Узнать больше
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section id="partners" className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12 text-blue-400">Наши партнёры</h2>
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="bg-gray-900 rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-105 border border-gray-800"
            >
              <div className="relative h-48 bg-gray-800">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-32 h-32 relative">
                    <Image
                      src={partner.logo}
                      alt={`${partner.name} logo`}
                      fill
                      className="object-contain p-4"
                    />
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-blue-400 mb-2">
                  {partner.name}
                </h3>
                <p className="text-gray-300 mb-4">{partner.description}</p>
                <div className="bg-blue-900/30 p-4 rounded-lg border border-blue-800">
                  <p className="text-blue-300 font-medium">{partner.specialOffer}</p>
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

      {/* About Section */}
      <section id="about" className="bg-gray-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-blue-400 mb-8">О Warpoint</h2>
            <p className="text-gray-300 max-w-3xl mx-auto text-lg">
              Warpoint - это сеть клубов виртуальной реальности, где вы можете погрузиться в захватывающие VR-игры, 
              отметить день рождения или провести корпоративное мероприятие. Мы предлагаем полную свободу перемещения 
              и лучшее VR-оборудование для незабываемых впечатлений.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-blue-400 mb-8">Контакты</h2>
            <p className="text-gray-300 max-w-3xl mx-auto text-lg mb-8">
              Свяжитесь с нами для получения дополнительной информации о наших партнёрских программах
            </p>
            <a 
              href="https://msk.warpoint.ru/contacts" 
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-md text-lg font-medium transition-colors"
            >
              Связаться с нами
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-gray-800 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <Image
                src="/images/warpoint-logo.png"
                alt="Warpoint Logo"
                width={120}
                height={40}
                className="h-8 w-auto"
              />
            </div>
            <div className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Warpoint. Все права защищены.
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
} 