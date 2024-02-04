import Image from "next/image";

import { BsGpuCard } from "react-icons/bs";
import { BsFillCpuFill } from "react-icons/bs";
import { BsFillMotherboardFill } from "react-icons/bs";
import { FaMemory } from "react-icons/fa";
import { BsSdCardFill } from "react-icons/bs";

import { BsMouseFill } from "react-icons/bs";
import { BsFillKeyboardFill } from "react-icons/bs";
import { FaMicrophone } from "react-icons/fa";
import { MdDeviceHub } from "react-icons/md";
import { FaDisplay } from "react-icons/fa6";
import { MdKeyboardAlt } from "react-icons/md";
import { IoCameraSharp } from "react-icons/io5";
import { MdCamera } from "react-icons/md";
import { PiOfficeChairFill } from "react-icons/pi";

const Pc = () => {
  return (
    <section className='flex justify-center'>
      <div className='max-w-6xl my-40 mx-10 flex flex-col gap-20'>
        <article className='flex'>
          <div>Especificaciones de Pc</div>
          <div>
            <Image
              src='/assets/pccomponentes/foto-pc-duende.webp'
              alt='foto-pc'
              width={300}
              height={300}
            />
          </div>
        </article>
        <article>
          <h4 className='text-3xl font-semibold mb-10'>Componentes</h4>
          <ul className='grid grid-cols-4 gap-x-10 gap-y-28'>
            <li>
              <div className='h-44 p-5'>
                <Image
                  className='w-full h-full object-contain'
                  src='/assets/pccomponentes/placavideo-pc-duende.webp'
                  alt='placavideo-pc'
                  width={200}
                  height={200}
                />
              </div>
              <h4 className='mt-3 text-text-primary text-lg font-medium'>
                ZOTAC GeForce RTX 2070 Super Mini 8GB GDDR6 256-Bit 14Gbps
              </h4>
              <div className='flex items-center gap-2 text-lg mt-2'>
                <BsGpuCard className='w-6 h-6' />
                <span>Placa de Video</span>
              </div>
            </li>
            <li>
              <div className='h-44 p-5'>
                <Image
                  className='w-full h-full object-contain'
                  src='/assets/pccomponentes/procesador-pc-duende.webp'
                  alt='procesador-pc'
                  width={200}
                  height={200}
                />
              </div>
              <h4 className='mt-3 text-text-primary text-lg font-medium'>
                Intel Core i9-10900K 10 Cores, up to 5.3 GHz Unlocked
              </h4>
              <div className='flex items-center gap-2 text-lg mt-2'>
                <BsFillCpuFill className='w-6 h-6' />
                <span>Procesador</span>
              </div>
            </li>
            <li>
              <div className='h-44 p-5'>
                <Image
                  className='w-full h-full object-contain'
                  src='/assets/pccomponentes/placamadre-pc-duende.webp'
                  alt='placamadre-pc'
                  width={200}
                  height={200}
                />
              </div>
              <h4 className='mt-3 text-text-primary text-lg font-medium'>
                Gigabyte H470I AORUS PRO AX, Mini ITX/DDR4/WIFI 6
              </h4>
              <div className='flex items-center gap-2 text-lg mt-2'>
                <BsFillMotherboardFill className='w-6 h-6' />
                <span>Placa Madre</span>
              </div>
            </li>
            <li>
              <div className='h-44 p-5'>
                <Image
                  className='w-full h-full object-contain'
                  src='/assets/pccomponentes/ram-pc-duende.webp'
                  alt='ram-pc'
                  width={200}
                  height={200}
                />
              </div>
              <h4 className='mt-3 text-text-primary text-lg font-medium'>
                Corsair Dominator Platinum RGB 32GB (4x8GB) DDR4 3600
              </h4>
              <div className='flex items-center gap-2 text-lg mt-2'>
                <FaMemory className='w-6 h-6' />
                <span>Memoria Ram</span>
              </div>
            </li>
            <li>
              <div className='h-44 p-5'>
                <Image
                  className='w-full h-full object-contain'
                  src='/assets/pccomponentes/ssd-pc-duende.webp'
                  alt='ssd-pc'
                  width={200}
                  height={200}
                />
              </div>
              <h4 className='mt-3 text-text-primary text-lg font-medium'>
                1TB WD Blue SN550 NVMe Internal SSD - Gen3 x4 PCIe 8Gb/s
              </h4>
              <div className='flex items-center gap-2 text-lg mt-2'>
                <BsSdCardFill className='w-6 h-6' />
                <span>Memoria SSD</span>
              </div>
            </li>
          </ul>
        </article>
        <article>
          <h4 className='text-3xl font-semibold mb-10'>Periféricos</h4>
          <ul className='grid grid-cols-4 gap-x-10 gap-y-28'>
            <li>
              <div className='h-44 p-5'>
                <Image
                  className='w-full h-full object-contain'
                  src='/assets/pcperifericos/mouse-pc-duende.webp'
                  alt='mouse-pc'
                  width={200}
                  height={200}
                />
              </div>
              <h4 className='mt-3 text-text-primary text-lg font-medium'>
                Mouse Inalámbrico Logitech G Pro X Superlight
              </h4>
              <div className='flex items-center gap-2 text-lg mt-2'>
                <BsMouseFill className='w-6 h-6' />
                <span>Mouse</span>
              </div>
            </li>
            <li>
              <div className='h-44 p-5'>
                <Image
                  className='w-full h-full object-contain'
                  src='/assets/pcperifericos/teclado-pc-duende.webp'
                  alt='teclado-pc'
                  width={200}
                  height={200}
                />
              </div>
              <h4 className='mt-3 text-text-primary text-lg font-medium'>
                Teclado Mecanico Gamer Logitech G Pro X
              </h4>
              <div className='flex items-center gap-2 text-lg mt-2'>
                <BsFillKeyboardFill className='w-6 h-6' />
                <span>Teclado</span>
              </div>
            </li>
            <li>
              <div className='h-44 p-5'>
                <Image
                  className='w-full h-full object-contain'
                  src='/assets/pcperifericos/microfono-pc-duende.webp'
                  alt='microfono-pc'
                  width={200}
                  height={200}
                />
              </div>
              <h4 className='mt-3 text-text-primary text-lg font-medium'>
                Microfono Shure Sm7b Cardioid Dynamic
              </h4>
              <div className='flex items-center gap-2 text-lg mt-2'>
                <FaMicrophone className='w-6 h-6' />
                <span>Micrófono</span>
              </div>
            </li>
            <li>
              <div className='h-44 p-5'>
                <Image
                  className='w-full h-full object-contain'
                  src='/assets/pcperifericos/rode-pc-duende.webp'
                  alt='rode-pc'
                  width={200}
                  height={200}
                />
              </div>
              <h4 className='mt-3 text-text-primary text-lg font-medium'>
                RODE PSA1 Brazo de estudio profesional
              </h4>
              <div className='flex items-center gap-2 text-lg mt-2'>
                <MdDeviceHub className='w-6 h-6' />
                <span>Brazo</span>
              </div>
            </li>
            <li>
              <div className='h-44 p-5'>
                <Image
                  className='w-full h-full object-contain'
                  src='/assets/pcperifericos/monitor-pc-duende.webp'
                  alt='monitor-pc'
                  width={200}
                  height={200}
                />
              </div>
              <h4 className='mt-3 text-text-primary text-lg font-medium'>
                Monitor Gamer 27p Asus
              </h4>
              <div className='flex items-center gap-2 text-lg mt-2'>
                <FaDisplay className='w-6 h-6' />
                <span>Monitor</span>
              </div>
            </li>
            <li>
              <div className='h-44 p-5'>
                <Image
                  className='w-full h-full object-contain'
                  src='/assets/pcperifericos/streamdeck-pc-duende.webp'
                  alt='streamdeck-pc'
                  width={200}
                  height={200}
                />
              </div>
              <h4 className='mt-3 text-text-primary text-lg font-medium'>
                Stream Deck Classis - 15 customisable LCD keys
              </h4>
              <div className='flex items-center gap-2 text-lg mt-2'>
                <MdKeyboardAlt className='w-6 h-6' />
                <span>Stream Deck</span>
              </div>
            </li>
            <li>
              <div className='h-44 p-5'>
                <Image
                  className='w-full h-full object-contain'
                  src='/assets/pcperifericos/camara-pc-duende.webp'
                  alt='camara-pc'
                  width={200}
                  height={200}
                />
              </div>
              <h4 className='mt-3 text-text-primary text-lg font-medium'>
                Cámara Digital Mirrorless Full Frame ILCE-7C A7C
              </h4>
              <div className='flex items-center gap-2 text-lg mt-2'>
                <IoCameraSharp className='w-6 h-6' />
                <span>Cámara</span>
              </div>
            </li>
            <li>
              <div className='h-44 p-5'>
                <Image
                  className='w-full h-full object-contain'
                  src='/assets/pcperifericos/lente-pc-duende.webp'
                  alt='lente-pc'
                  width={200}
                  height={200}
                />
              </div>
              <h4 className='mt-3 text-text-primary text-lg font-medium'>
                Lente de zoom gran angular G Master FE 16-35 mm
              </h4>
              <div className='flex items-center gap-2 text-lg mt-2'>
                <MdCamera className='w-6 h-6' />
                <span>Lente</span>
              </div>
            </li>
            <li>
              <div className='h-44 pb-5'>
                <Image
                  className='w-full h-full object-contain'
                  src='/assets/pcperifericos/silla-pc-duende.webp'
                  alt='silla-pc'
                  width={200}
                  height={200}
                />
              </div>
              <h4 className='mt-3 text-text-primary text-lg font-medium'>
                Silla Gamer Corsair T3 Rush Gris Carbon
              </h4>
              <div className='flex items-center gap-2 text-lg mt-2'>
                <PiOfficeChairFill className='w-6 h-6' />
                <span>Silla</span>
              </div>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Pc;
