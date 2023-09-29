public class StoneDev extends Creatures {
// public StoneDev(){
//     getPoder();
//     getAtaque();
//     getDefesa();
//     getVelocidade();
//     getPontosDeVida();
// }

public void stoneAttack(){
    System.out.println("Stone Ataque!");
}

@Override
public String toString() {
    return String.format("*****StoneDev***** %n Poder: %d %n %s: %d %n %s: %d %n %s: %d %n %s: %d %n", 
                        getPoder(), 
            "Ataque", getAtaque(),
            "Defesa", getDefesa(), 
            "Velocidade", getVelocidade(),
            "Pontos de Vida", getPontosDeVida());
}

}