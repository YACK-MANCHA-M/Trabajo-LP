package pe.edu.upeu.sysalmacen.service.impl;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import pe.edu.upeu.sysalmacen.Model.Categoria;
import pe.edu.upeu.sysalmacen.repository.ICrudGenericoRepository;
import pe.edu.upeu.sysalmacen.service.ICategoriaService;

 @Service
 @Transactional
 @RequiredArgsConstructor

public class CategoriaServiceImp extends CrudGenericoServiceImp<Categoria,Long> implements ICategoriaService {

    private final ICategoriaService categoriaRepository;

    @Override
    protected ICrudGenericoRepository<Categoria, Long> getRepo() {
        return null;
    }
}
