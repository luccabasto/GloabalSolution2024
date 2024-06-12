
import EmailForm from '@/components/emailForm/newsForm';

export default function HomePage() {
  return (
    <div className='md:flex md:flex-col'>
      <section className='flex justify-between h-full p-5'>
       <div className='flex items-center flex-col justify-center font-medium'>
          <h1 className='text-xl'>Quanto mais você recicla, mais pontos você consegue</h1>
          <p>Troque seus pontos por descontos em lojas parceiras</p>
          <div className='flex flex-col mt-[1rem]'>
            <p className='mb-5'>Quer saber as últimas atualizações? </p>
              <EmailForm/>
        </div>
       </div>
        <div className=''>
          <img src="/hero.png" alt="" />
        </div>
        
      </section>
    </div>
  
  );
}
