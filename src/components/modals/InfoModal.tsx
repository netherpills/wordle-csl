import { Cell } from '../grid/Cell'
import { BaseModal } from './BaseModal'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export const InfoModal = ({ isOpen, handleClose }: Props) => {
  return (
    <BaseModal title="¿Cómo jugar?" isOpen={isOpen} handleClose={handleClose}>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        Tenés que adivinar la palabra de 5 letras en 6 intentos.
        Cada vez que probás una palabra diferente, el color de los espacios
        ira cambiando acorde a si la letra está en la palabra y en la
        posición correcta.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell
          isRevealing={true}
          isCompleted={true}
          value="J"
          status="correct"
        />
        <Cell value="O" />
        <Cell value="R" />
        <Cell value="G" />
        <Cell value="Y" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        La letra J está en la palabra y en el lugar correcto.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="V" />
        <Cell
          isRevealing={true}
          isCompleted={true}
          value="E"
          status="present"
        />
        <Cell value="L" />
        <Cell
          isRevealing={true}
          isCompleted={true}
          value="A"
          status="present"
        />
        <Cell value="N" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        Las letras E y A están en la palabra pero no en el lugar correcto.
      </p> 

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="P" />
        <Cell value="R" />
        <Cell isRevealing={true} isCompleted={true} value="I" status="absent" />
        <Cell value="M" />
        <Cell value="O" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        La letra I no se encuentra en ningún lugar de la palabra.
      </p>

      <p className="text-sm text-gray-500 dark:text-gray-300">
        <br></br>Las palabras en juego están relacionadas con la 
        <b> Promo 65</b>, e incluyen: <i>nombres, apodos, apellidos,
        profesores, entre otras cosas, de los tres cursos. Cada palabra
        es aleatoria.</i>
      </p>     

      <p className="mt-6 italic text-sm text-gray-500 dark:text-gray-300">
        El codigo original es de
        -{' '}
        <a
          href="https://github.com/cwackerfuss/react-wordle"
          className="underline font-bold"
        >
          cwackerfuss
        </a>{' '}
        <br></br>
        Personalizado por
        -{' '}
        <a
          href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
          className="underline font-bold"
        >
          Mariano
        </a>{' '}
      </p>
    </BaseModal>
  )
}
