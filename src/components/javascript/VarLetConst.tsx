import { ReactElement } from 'react';

export const VarLetConst = (): ReactElement => {
  return (
    <>
        <p className='mb-4'>
            Переменные в JavaScript можно создавать тремя способами c помощью ключевых слов <code>var</code>, <code>let</code> и <code>const</code>.
            Они выполняют одну и ту же функцию - объявляют о создании именованной ячейки в памяти, но делают это по-разному.
            Быстренько разберём разницу между ними:
        </p>
        <div className='box'>
            <h3 className='subtitle is-4 mb-2'><code>var</code></h3>
   
                    использовалось для объявления переменных в JavaScript c 1995 to 2015 до прихода в нашу жизнь ES6.
 
                    можно переопределять

        </div>
    </>
  );
};
