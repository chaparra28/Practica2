import { TestBed } from '@angular/core/testing';


describe('GetjsonService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetjsonService = TestBed.get(GetjsonService);
    expect(service).toBeTruthy();
  });
});
