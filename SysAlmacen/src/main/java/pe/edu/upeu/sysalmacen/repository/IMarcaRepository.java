package pe.edu.upeu.sysalmacen.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import pe.edu.upeu.sysalmacen.Model.Marca;

public interface IMarcaRepository extends JpaRepository<Marca, Long> {
}