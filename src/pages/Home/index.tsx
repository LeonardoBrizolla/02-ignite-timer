import { Play } from 'phosphor-react'
import {
	CountdownContainer,
	FormContainer,
	HomeContainer,
	Separator,
	StartCountdownButton,
	TaskInput,
	MinutesAmountInput,
} from './styles'

export function Home() {
	return (
		<HomeContainer>
			<form action="">
				<FormContainer>
					<label htmlFor="task">Vou trabalhar em</label>
					<TaskInput
						type="text"
						id="task"
						placeholder="Dê um nome para sou projeto"
						list="task-suggestions"
					/>

					<datalist id="task-suggestions">
						<option value="Projeto 1" />
						<option value="Projeto 2" />
						<option value="Projeto 3" />
						<option value="Pastel" />
					</datalist>

					<label htmlFor="minutesAmount">durante</label>
					<MinutesAmountInput
						type="number"
						id="minutesAmount"
						placeholder="00"
						step={5}
						min={5}
						max={60}
					/>

					<span>minutos.</span>
				</FormContainer>

				<CountdownContainer>
					<span>0</span>
					<span>0</span>
					<Separator>:</Separator>
					<span>0</span>
					<span>0</span>
				</CountdownContainer>

				<StartCountdownButton disabled type="submit">
					<Play />
					Começar
				</StartCountdownButton>
			</form>
		</HomeContainer>
	)
}
