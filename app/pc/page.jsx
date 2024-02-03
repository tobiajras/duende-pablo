import Image from "next/image";

import { BsGpuCard } from "react-icons/bs";
import { BsFillCpuFill } from "react-icons/bs";
import { BsFillMotherboardFill } from "react-icons/bs";
import { FaMemory } from "react-icons/fa";
import { BsSdCardFill } from "react-icons/bs";

const Pc = () => {
  return (
    <section className='flex justify-center'>
      <div className='max-w-6xl my-40 mx-10 flex flex-col gap-20'>
        <article className='flex'>
          <div>Especificaciones de Pc</div>
          <div>
            <Image
              src='/assets/pc/foto-pc-duende.webp'
              alt='foto-pc'
              width={300}
              height={300}
            />
          </div>
        </article>
        <article>
          <h4>Componentes</h4>
          <ul className='grid grid-cols-4 gap-10'>
            <li>
              <div className='h-44 p-5'>
                <Image
                  className='w-full h-full object-contain'
                  src='/assets/pc/placavideo-pc-duende.webp'
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
                  src='/assets/pc/procesador-pc-duende.webp'
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
                  src='/assets/pc/placamadre-pc-duende.webp'
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
                  src='/assets/pc/ram-pc-duende.webp'
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
                  src='/assets/pc/ssd-pc-duende.webp'
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
          <h4>Periféricos</h4>
        </article>
      </div>
    </section>
  );
};

export default Pc;
